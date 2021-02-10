import React from 'react'
import Layout from '../components/layout'

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

const parseList = Object.values(finishedProjects).map((project) => {
  return (
    <li>{project.name}</li>
  )
})

const projects = () => (
  <Layout>
    <div id="main">
      <h1>Projects</h1>
      <form>Search bar</form>
      <ul>{parseList ? parseList : "No Items"}</ul>
    </div>
  </Layout>
)

export default projects
