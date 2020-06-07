import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import axios from 'axios';
import {
  Col,
  Row,
  Image,
  Spinner,
} from 'react-bootstrap';
import styled from 'styled-components';
import {toast} from 'react-toastify';

const ImageWrapper = styled.div`
  .instagram-image {
    margin: 5px 0;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;  
    /* Image height */
    width: 100%;
    height: 40vh;
    object-fit: cover;
    cursor: pointer;
  }
`;

const baseInstagramUrl = 'https://www.instagram.com';
const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/);

interface Props {
  accountUsername: string;
  displayAmount: number;
}

const InstagramImages = ({
  accountUsername,
  displayAmount,
}: Props) => {
	const [images, setImages] = useState([]);

  const fetchInstagramPhotos = useCallback(async (accountUrl) => {
    const response = await axios.get(accountUrl);
    const instagramData = response.data.match(instagramRegExp)[1];
    const instagramDataFinal = instagramData.substring(0, instagramData.length - 1);
    const json = JSON.parse(instagramDataFinal);
    const edges = json.entry_data.ProfilePage[0]
      .graphql.user.edge_owner_to_timeline_media.edges.splice(0, displayAmount);

    const photos = edges.map((node) => ({
      url: `${baseInstagramUrl}/p/${node.node.shortcode}/`,
      thumbnailUrl: node.node.thumbnail_src,
      displayUrl: node.node.display_url,
      caption: node.node.edge_media_to_caption.edges[0]?.node.text,
    }));
    
    setImages(photos);
  }, [displayAmount]);

	useEffect(() => {
    try {
      fetchInstagramPhotos(`${baseInstagramUrl}/${accountUsername}/`);
    } catch {
      toast(`An error has occurred, please refresh the page.`);
    }    
  }, [fetchInstagramPhotos, accountUsername]);
  
  return (
    <Row style={{padding: '50px 0'}}>
      {!images || images.length === 0 ?
        <Col xs={12}>
          <Spinner animation="grow" variant="success" />
        </Col> :
        images.map((image, i) => (
          <Col 
            key={`instagram-images-${i}`}
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <ImageWrapper>
              <Image
                alt={`${accountUsername}-${i}`}
                className="instagram-image"
                fluid
                key={i}
                src={image.displayUrl}
                onClick={() => window.open(image.url, 'newWin')}
              />
            </ImageWrapper>
          </Col>
        ))}
    </Row>
  );
}

export default InstagramImages;
