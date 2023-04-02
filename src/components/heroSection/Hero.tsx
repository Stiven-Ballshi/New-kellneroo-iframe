import React, { useEffect, useState } from "react";

import SearchSection from "../heroSearchSection/SearchSection";
import { LocationIcon, SearchIcon } from "../CustomIcons";

import { getWaitressJobs, getPersonnel } from "../../service/getJobs";
import { GetQueryRole, getQueryValue } from "../../hooks/getQueryRole";
import { Props as CardProps } from "../heroSearchSection/Card";
import { Modal } from "@mui/material";
import useCheckMobileScreen from "../../hooks/useMobile";

import styles from "./hero.module.scss";
import { useRouter } from "next/router";

function HeroSection() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CardProps[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const [value, setValue] = useState<string>("");

  const isMobile = useCheckMobileScreen();

  const selectedRole = GetQueryRole();

  const isPersonnel = selectedRole === "waitress";

  const theme = isPersonnel ? "#4A7081" : "#483F44";

  const getJobs = async ({ city }: { city: string }) => {
    const selectedCity = city.trim().length > 0 ? city : "Munich";

    setLoading(true);

    setData([]);

    if (getQueryValue(router) === "waitress") {
      const response = await getWaitressJobs({ city: selectedCity });

      if (response) {
        setData(
          response.map((item) => ({
            icons: ["coffe", "sun", "moon"],
            image: item.picture_urls[0] ?? "",
            title: item.edges.caterer.company_name,
            job: {
              benefits: item.benefits,
              perHour: item.hourly_rate,
            },
          }))
        );
      }
    } else {
      const response = await getPersonnel({ city: selectedCity });

      if (response) {
        setData(
          response.map((item) => ({
            icons: ["coffe", "sun", "moon"],
            image: item.profile_picture_url ?? "",
            title: item.firstname,
            personel: {
              employment: item.description_tags ?? [],
            },
          }))
        );
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    getJobs({ city: "Munich" });

    // selectedRole changes 3 times the firstLoad ref manages it
  }, [router]);

  return (
    <div
      style={{
        background: theme,
      }}
      className={styles.user__search}
    >
      <div className={[styles.search__wrapper, "container"].join(" ")}>
        <div className={styles.search__left}>
          <div
            style={{
              color: theme,
            }}
            className={styles.search__title}
          >
            {isPersonnel
              ? " Der schnellste Weg, um die besten Jobs zu finden."
              : "Der schnellste Weg, um Dein neues Personal zu finden."}
          </div>
          <div
            style={{
              color: theme,
            }}
            className={styles.search__body}
          >
            <h3 className={styles.search__subtitle}>
              {isPersonnel
                ? "In welcher Stadt magst Du jobben?"
                : "In welcher Stadt willst Du Personal finden?"}
            </h3>
            <div className={styles.search__location}>
              <LocationIcon
                style={{
                  fill: theme,
                }}
                className={styles.location__icon}
              />

              <div
                style={{
                  color: theme,
                }}
                className={styles.location__text}
              >
                <p>Location</p>
                <h3>{value.trim().length > 0 ? value : "München, Germany"}</h3>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                getJobs({ city: value });

                setVisibleModal(true);
              }}
            >
              <div className={styles.container}>
                {!value && (
                  <span className={styles.icon__box}>
                    <SearchIcon />
                  </span>
                )}
                <input
                  className={styles.search__input}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Stadt oder Postleitzahl"
                />
              </div>

              <div className={styles.search__btnContainer}>
                <button
                  style={{
                    background: theme,
                  }}
                  className={styles.btn}
                  type="submit"
                >
                  Finden
                </button>
              </div>
            </form>
          </div>
          <div className={styles.search__hosted}>
            Made and hosted in the EU 🇪🇺
          </div>
        </div>

        {isMobile && (
          <Modal open={visibleModal} onClose={() => setVisibleModal(false)}>
            <div className={styles.modal}>
              <SearchSection
                value={value}
                loading={loading}
                data={data}
                className={styles.modal__content}
                setVisibleModal={setVisibleModal}
              />
            </div>
          </Modal>
        )}

        {!isMobile && (
          <SearchSection
            setVisibleModal={setVisibleModal}
            value={value}
            loading={loading}
            data={data}
          />
        )}
      </div>
    </div>
  );
}

export default HeroSection;
