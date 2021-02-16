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
    const { value } = e.target;
    setForm(value);
  };


  useEffect(() => {

  }, [form]);

  const parsedList = projects && projects.map((obj, i) => {
    return (
      <GalleryItem
        id={obj.id}
        source={obj.source}
        thumbnail={obj.thumbnail}
        caption={obj.caption}
        description={obj.description}
        // position={obj.position}
        // toggleLightbox={obj.toggleLightbox}
        position={i}
        toggleLightbox={toggleLightbox}
      />
    );
  });


  return (
    <div>
      <form>
        <input type="text" id="projects" name="projects" onChange={handleChange} value={form} placeholder="Search Projects..."></input>
      </form>
      {projects && (<div className="row">
        {parsedList}
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
