import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { GET_ALL_TEAM_MEMBERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export default function Team() {
  const { loading, error, data } = useQuery(GET_ALL_TEAM_MEMBERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  const teamMembers = data.teamMembers;
  return (
    <div>
      <h1 className="header">Team</h1>
      <div className="member-container">
        {teamMembers.map((member, index) => (
          <Card key={`team member ${index}`} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              width="140"
              image={member.image.url}
              alt={member.firstname}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {member.firstname} {member.lastname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
