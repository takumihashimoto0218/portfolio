'use client';
import React from 'react';
import WorkList from '@/app/data/WorkList';
import Link from 'next/link';
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <Typography variant="h3" fontFamily="monospace">
        My Work List
      </Typography>
      <Grid container spacing={3}>
        {WorkList.map((work) => (
          <Grid item key={work.title} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <Image
                src={`/img/workimage/${work.imagePath}`}
                height={work.imageHeight}
                width={work.cardWidth}
                alt={work.title}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
                <Typography variant="h6" sx={{ flex: 1 }}>
                  {work.title}
                </Typography>
                <Typography variant="body1">
                  {work.description}
                </Typography>
                <div>
                  {work.tips.map((tip, index) => (
                    <Chip
                      key={index}
                      label={tip}
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: 'lightgray' }}
                      style={{ marginRight: 4, marginBottom: 4 }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Link href="/">ホーム</Link>
    </motion.div>
  );
};

export default Page;





