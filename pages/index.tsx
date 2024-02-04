import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nConfig from '../next-i18next.config.mjs'
import Link from "next/link";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, nextI18nConfig.i18n.locales)),
  },
});

export default function Home() {
  const { t, i18n } = useTranslation('common')
  return (
    <>
      <div>{t('title')}</div>
      <div>{t('main.text')}</div>
      <div style={{ 'display': 'flex', 'flexDirection': "column", 'gap': '10px' }}>
        <div onClick={() => i18n.changeLanguage('en')}>en</div>
        <div onClick={() => i18n.changeLanguage('it')}>it</div>
        <Link href='/'>/</Link>
      </div>
    </>
  );
}
