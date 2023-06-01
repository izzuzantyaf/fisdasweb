import Head from "next/head"
import MenuPageLayout from "../layouts/menu-page.layout"
import { repeatElement } from "../core/lib/helpers/repeat-element.helper"
import { Skeleton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { articleService } from "../core/services/article.service"

export default function BlogPage() {
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
            {articles?.map(({ title }, index) => (
              <div key={index} className="shadow-lg rounded-lg p-4">
                <div className="article-title">{title}</div>
              </div>
            )) ?? repeatElement(<Skeleton height={150} />, 6)}
          </div>
        </>
      </MenuPageLayout>
    </>
  )
}
