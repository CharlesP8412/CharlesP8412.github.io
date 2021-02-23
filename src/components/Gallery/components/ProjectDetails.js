import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const ProjectDetails = ({ currentIndex, views }) => {
  const project = views[currentIndex]

  const features = project && project.features.map(feat => {
    return <li key={uuidv4()}>{feat}</li >
  })
  const stack = project && project.stack.map(tech => {
    return <li key={uuidv4()}>{tech}</li >
  })

  return (
    <article className="projectDisplay">
      <section className="projectImages" >
        <img src={project.source} alt="" />
        <span>
          {/* Thumbs */}
        </span>
      </section>
      <section className="projectDetails">

        <h1 ><u>{project.caption}</u></h1>
        <h4 >{project.description}</h4>

        <table>
          <tbody>
            <tr>
              <th>Built With:</th>
              <th>Features:</th>
            </tr>
            <tr>
              <td>
                <ul>
                  {stack}
                </ul>
              </td>
              <td>
                <ul>
                  {features}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        {/*         <p>
          Long Desc / User Story
          App x allows a user to track their passwords as well as share role based accounts within their organization, ie Social media accounts with
          the marketing team... <br />
          Passwords can be generated based on user criteria ie Letters, case, numbers, symbols and length
        </p> */}

      </section>
    </article>
  )

}

export default ProjectDetails