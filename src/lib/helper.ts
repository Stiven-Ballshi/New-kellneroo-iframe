export const getLocale = ({ locale }: { locale?: string }) =>
  !locale || locale === 'default' ? 'en' : locale

let inDevEnvironment = false

if (process && process.env.NODE_ENV === 'development') {
  inDevEnvironment = true
}

export { inDevEnvironment }
