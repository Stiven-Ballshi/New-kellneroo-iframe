import Link from 'next/link'
import React from 'react'
import { getStrapiURL } from '../../lib/api'
import Image from 'next/image'
import { GetAllPostsItem } from '../../types/service/blog'

import styles from '../../styles/components/card.module.scss'
import moment from 'moment'

type Props = {
  post: GetAllPostsItem
}

const PostCard = ({ post }: Props) => {
  return (
    <Link
      className={styles.card}
      href={`/blog/${post.attributes.slug}`}
      key={post.id}
    >
      <div className={styles.card__container}>
        <Image
          className={styles.card__image}
          src={getStrapiURL(post.attributes.thumbnail.data.attributes.url)}
          alt={post.attributes.thumbnail.data.attributes.alternativeText}
          width={325}
          blurDataURL={getStrapiURL(
            post.attributes.thumbnail.data.attributes.url
          )}
          height={230}
          placeholder="blur"
        />

        <h2 className={styles.card__title}>{post.attributes.title}</h2>

        <p className={styles.card__description}>
          {post.attributes.description}
        </p>

        <div className={styles.card__info}>
          <p className={styles.card__date}>
            {moment(post.attributes.createdAt).format('MMMM d, YYYY')}
          </p>

          {post.attributes.writer.data && (
            <p className={styles.card__author}>
              {post.attributes.writer.data.attributes.name}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default PostCard
