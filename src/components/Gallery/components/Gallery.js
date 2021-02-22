import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { projects } from '../constants/projects'
import ProjectDetails from './ProjectDetails'

const Gallery = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [form, setForm] = useState("");
  const [results, setResults] = useState(projects);

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen]);

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setForm(value);
  };

  const search = (searchTerm, list) => {
    if (!list) {
      return;
    }
    if (!searchTerm) {
      return list;
    }
    searchTerm = searchTerm.toLowerCase();
    let sResults = {};
    list.map((proj) => {
      Object.values(proj).map((val) => {
        if (typeof val === 'object') {
          val = val.join(" ")
        }
        val = val.toLowerCase()
        if (typeof val === 'string' && val.includes(searchTerm)) {
          sResults = { ...sResults, [proj.id]: { ...proj } }
        }
      })
    })
    return sResults;
  }

  useEffect(() => {
    setResults(search(form, projects));
  }, [form]);

  const projectList = results && Object.values(results).map((obj, i) => {
    return (
      <GalleryItem
        key={obj.id}
        id={obj.id}
        source={obj.source}
        thumbnail={obj.thumbnail}
        caption={obj.caption}
        description={obj.description}
        techStack={obj.stack}
        position={i.toString()}
        toggleLightbox={toggleLightbox}
      />
    );
  });


  return (
    <React.Fragment>
      <span className='projectSearch'>
        <h2 className='title'>Recent Work</h2>
        <input type="text" id="projects" name="projects" onChange={handleChange} value={form} placeholder="Search Projects..."></input>
      </span>
      <div>

        <br />
        {projects && (<div className="row">
          {projectList}
        </div>
        )}
        <ModalGateway>
          {lightboxIsOpen && (
            <Modal onClose={toggleLightbox} scrollable={true}>
              {/* <Carousel currentIndex={selectedIndex} views={projects} /> */}
              <ProjectDetails currentIndex={selectedIndex} views={projects} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    </React.Fragment>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
