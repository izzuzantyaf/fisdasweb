import Head from "next/head"
import MenuPageLayout from "../layouts/menu-page.layout"
import { repeatElement } from "../core/lib/helpers/repeat-element.helper"
import { Skeleton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { articleService } from "../core/services/article.service"
import Image from "next/image"

export default function BlogPage() {
  const dateFormatter = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
  })
  const [articles, setArticles] = useState<Record<string, any>>()

  const getArticles = async () => {
    const articles = await articleService.getAll()
    setArticles(articles)
  }

  useEffect(() => {
    getArticles()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Blog | Lab Fisika Dasar Universitas Telkom</title>
      </Head>

      <MenuPageLayout pageTitle="Blog">
        <>
          <div className="articles-list grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles?.map(
              ({ title, content, created_at, cover_image_url }, index) => (
                <div key={index} className="shadow-lg rounded-xl p-4">
                  {cover_image_url ? (
                    <>
                      <Image
                        src={cover_image_url}
                        height={720}
                        width={960}
                        alt={cover_image_url}
                        className="rounded-xl"
                      />
                      <div className="spacer mb-4"></div>
                    </>
                  ) : null}
                  <div className="article-title font-bold text-2xl">
                    {title}
                  </div>
                  <div className="article-date mt-[8px] font-extralight">
                    {dateFormatter.format(new Date(created_at))}
                  </div>
                  <p className="article-content mt-4">{content}</p>
                </div>
              )
            ) ?? repeatElement(<Skeleton height={150} />, 6)}
          </div>
        </>
      </MenuPageLayout>
    </>
  )
}
