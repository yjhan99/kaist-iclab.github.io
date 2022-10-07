import { getFileBySlug, getImageList } from '@/lib/mdx'

import { H3, MDX } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import ImageCarousel from '@/components/ImageCarousel'

import siteMetadata from '@/data/siteMetadata'

import SensorData from '@/data/landing/sensordata.svg'
import Analyze from '@/data/landing/analyze.svg'
import ServiceAct from '@/data/landing/service_act.svg'
import HCI from '@/data/landing/hci.svg'

import styles from '@/css/pages/index.module.css'

export async function getStaticProps() {
  const landing = await getFileBySlug('landing', 'Landing')
  const imgList = getImageList()
  return { props: { landing, imgList } }
}

export default function Home({ landing, imgList }) {
  const { mdxSource } = landing
  return (
    <div className={styles.container}>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className={styles.image_carousel_wrapper}>
        <ImageCarousel imgList={imgList}>
          Welcome to <br /> Interactive Computing Lab!
        </ImageCarousel>
      </div>
      <div className={styles.mdx_wrapper}>
        <MDX mdxSource={mdxSource} />
      </div>
      <div className={styles.overview}>
        <div className={styles.hci}>
          <HCI className={styles.hci_icon} />
          <H3>Human Computer Interaction</H3>
        </div>
        <div className={styles.concepts}>
          <div className={styles.concept}>
            <SensorData className={styles.concept_icon} />
            <H3>Sensor Data</H3>
            <div className={styles.list_wrapper}>
              <ul className={styles.list}>
                <li>
                  <strong>Mobile/ Wearable/ IoT Big data</strong> Collection
                </li>
                <li>Sensor data as ESM, biological, behavioral, and environmental data</li>
              </ul>
            </div>
            <div className={styles.detail_image}>
              <Image
                src="/static/images/landing/SensorData.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.concept}>
            <Analyze className={styles.concept_icon} />
            <H3>Analyze</H3>
            <div className={styles.list_wrapper}>
              <ul className={styles.list}>
                <li>Data Preprocessing and Machine learning</li>
                <li>
                  <strong>Sensor data analysis for wellbeing research</strong> (e.g., stress,
                  depression){' '}
                </li>
              </ul>
            </div>
            <div className={styles.detail_image}>
              <Image src="/static/images/landing/Analyze.png" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className={styles.concept}>
            <ServiceAct className={styles.concept_icon} />
            <H3>Act / Service</H3>
            <div className={styles.list_wrapper}>
              <ul className={styles.list}>
                <li>Digital health and wellbeing service development and experiments</li>
                <li>
                  Context-aware Intervention and Personalization for{' '}
                  <strong> behavior change</strong>{' '}
                </li>
              </ul>
            </div>
            <div className={styles.detail_image}>
              <Image
                src="/static/images/landing/ServiceAct.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
