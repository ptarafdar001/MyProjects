import React from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Profile = ({ user }) => {
  return (
    <Container className={styles.profileContainer}>
      <Row>
        <Col xs={12} sm={4} className={styles.textCenter}>
          <Image
            src={user.picture}
            roundedCircle
            className={styles.profileImage}
          />
        </Col>
        <Col xs={12} sm={8}>
          <h2 className={styles.profileName}>{user.name}</h2>
          <p className={styles.profileLocation}>{user.email}</p>
          <p className={styles.profileBio}>
            Email Verified : {user.email_verified ? "True" : "False"}
          </p>
          <p className={styles.profileDate}>Member since</p>
          <Button variant="primary" className={styles.editBtn}>
            Edit Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
