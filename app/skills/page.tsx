'use client';
import React from 'react';
import Link from 'next/link';
import { SkillList } from "@/app/data/SkillList";
import Image from 'next/image';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    viewport={{ once: true }}
    >
      <Box p={2} style={{ background: 'gray' }}>
        <Typography
          variant="h2"
          component="h1"
          style={{
            textAlign: 'center',
            color: 'white',
            letterSpacing: '1px',
            marginBottom: '20px'
          }}
        >
          My Skill List
        </Typography>
        <Grid container spacing={2}>
          {SkillList.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.title}>
              <Card variant="outlined" sx={{ boxShadow: 2 }}>
                <CardHeader
                  title={skill.title}
                  titleTypographyProps={{ variant: 'h6' }}
                />
                <CardContent>
                  <Image
                    src={`/img/skillimage/${skill.imagePath}`}
                    alt={skill.title}
                    height={50}
                    width={50}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Link href="/">ホーム</Link>
      </Box>
    </motion.div>
  );
};

export default Page;
