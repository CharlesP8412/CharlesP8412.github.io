import React from 'react'
import Layout from '../components/layout'
import thumb01 from '../assets/images/thumbs/01.jpg'

const finishedProjects = {
  "001": {
    id: '001',
    name: 'Tiny App1',
    desc: 'URL shortening App',
    stack: ['HTML', 'CSS', 'EJS',],
  },
  "002": {
    id: '002',
    name: 'Tiny App2',
    desc: 'URL shortening App',
    stack: ['HTML', 'CSS', 'EJS',],
  },
  "003": {
    id: '003',
    name: 'Tiny App3',
    desc: 'URL shortening App',
    stack: ['HTML', 'CSS', 'EJS',],
  }
}

const projectList = Object.values(finishedProjects).map((project) => {
  return (
    <article>
      <h2>{project.name}</h2>
      <img src={thumb01} alt="" />
      <p>HTML | CSS | REACT</p>
    </article>
  )
})

const projects = () => (
  <Layout>
    <div id="main">
      <h1>Projects</h1>
      <form>Search bar</form>
      <main>{projectList ? projectList : "No Items"}</main>
    </div>
  </Layout>
)

export default projects
