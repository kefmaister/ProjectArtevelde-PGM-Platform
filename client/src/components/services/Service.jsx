import React from "react";
import { GET_ALL_SERVICES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./service.module.css";

export default function Service() {
  const { loading, error, data } = useQuery(GET_ALL_SERVICES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const services = data.services;

  console.log(services);
  return (
    <div>
      <h1 className="header">Services</h1>
      <div className={styles.container}>
        {services.map((service, index) => (
          <Link
            className={styles.cardLink}
            to={`/service/${service.slug}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <Card className={styles.card} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image.url}
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
