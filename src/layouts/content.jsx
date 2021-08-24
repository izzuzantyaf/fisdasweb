import React from 'react'

export default function ContentLayout(props) {
  const { title, Content } = props.data
  return (
    <section className="content p-6 pb-12">
      <div className="container max-w-screen-lg mx-auto flex flex-col gap-6">
        <div className="title text-4xl font-bold">
          {title}
        </div>
        {Content}
      </div>
    </section>
  )
}