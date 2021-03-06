import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SidebarCategories from '../components/add-new-post/SidebarCategories';

const Posts = (props) => {
  const [PostsListOne, setPostsListOne] = useState([{
    backgroundImage: require("../images/content-management/1.jpeg"),
    category: "JAVA",
    categoryTheme: "dark",
    author: "Anna Kunis",
    authorAvatar: require("../images/avatars/1.jpg"),
    title: "Conduct at an replied removal an amongst",
    body:
      "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
    date: "28 February 2019"
  },
  {
    backgroundImage: require("../images/content-management/2.jpeg"),
    category: "C++",
    categoryTheme: "info",
    author: "James Jamerson",
    authorAvatar: require("../images/avatars/2.jpg"),
    title: "Off tears are day blind smile alone had ready",
    body:
      "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
    date: "29 February 2019"
  },
  {
    backgroundImage: require("../images/content-management/3.jpeg"),
    category: "C++",
    categoryTheme: "royal-blue",
    author: "Jimmy Jackson",
    authorAvatar: require("../images/avatars/2.jpg"),
    title: "Difficult in delivered extensive at direction",
    body:
      "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
    date: "29 February 2019"
  },
  {
    backgroundImage: require("../images/content-management/4.jpeg"),
    category: "JAVA",
    categoryTheme: "warning",
    author: "John James",
    authorAvatar: require("../images/avatars/3.jpg"),
    title: "It so numerous if he may outlived disposal",
    body:
      "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
    date: "29 February 2019"
  }])
  const [PostsListThree, setPostsListThree] = useState([
    {
      author: "John James",
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Had denoting properly jointure which well books beyond",
      body:
        "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
      date: "29 February 2019"
    },
    {
      author: "John James",
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Husbands ask repeated resolved but laughter debating",
      body:
        "It abode words began enjoy years no do ???no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
      date: "29 February 2019"
    },
    {
      author: "John James",
      authorAvatar: require("../images/avatars/3.jpg"),
      title:
        "Instantly gentleman contained belonging exquisite now direction",
      body:
        "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
      date: "29 February 2019"
    }
  ])

  return (
    <Container className="main-content-container px-4"
    >
      <Row>
        <Col lg="8" md="6" sm="12">

          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            {/* <PageTitle sm="4" title="Blog Posts" subtitle="" className="text-sm-left" /> */}
          </Row>

          {/* First Row of Posts */}
          <Row>
            {PostsListOne.map((post, idx) => (
              <Col lg="8" md="6" sm="12" className="mb-4" key={idx}>
                <Card small={false} className="card-post card-post--1 mx-5"
                  style={{ minWidth: "600px" }} >
                  <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${post.backgroundImage})`, }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${post.categoryTheme}`}
                    >
                      {post.category}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <a
                        href="#"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                      >
                        Written by {post.author}
                      </a>
                    </div>
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a href="#" className="text-fiord-blue">
                        {post.title}
                      </a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">{post.body}</p>
                    <span className="text-muted">{post.date}</span>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>



          {/* Third Row of Posts */}
          <Row>
            {PostsListThree.map((post, idx) => (
              // <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              // </Col>
            ))}
          </Row>

        </Col>
        <Col lg="4" md="12" sm="12" className='my-4'>
          <SidebarCategories title='filters' />
        </Col>
      </Row>
    </Container>

  );

}

export default Posts;
