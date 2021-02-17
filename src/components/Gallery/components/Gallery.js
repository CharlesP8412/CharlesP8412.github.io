import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { projects } from '../constants/projects'

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
    //Iterate over List
    const sResults = [];
    list.map((proj) => {
      //Iterate over proj values
      Object.values(proj).map(val => {
        //Match to search terms
        if (val) {
          val.toString().toLowerCase();
          if (val.includes(searchTerm)) {
            console.log("AAA", proj, val)
            sResults.push(proj);
          }
        }
      })
    })
    console.log("input", searchTerm, list, sResults)

    //Rtn Results (Array of Obj)
    return sResults;
  }

  useEffect(() => {
    setResults(search(form, projects));
  }, [form]);

  const projectList = results && results.map((obj, i) => {
    return (
      <GalleryItem
        id={obj.id}
        source={obj.source}
        thumbnail={obj.thumbnail}
        caption={obj.caption}
        description={obj.description}
        position={i}
        toggleLightbox={toggleLightbox}
      />
    );
  });


  return (
    <div>
      <input type="text" id="projects" name="projects" onChange={handleChange} value={form} placeholder="Search Projects..."></input>
      <br />
      {projects && (<div className="row">
        {projectList}
      </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={projects} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
