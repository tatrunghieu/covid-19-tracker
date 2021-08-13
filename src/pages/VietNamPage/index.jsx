import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getAllWorldReport, getTodayProvinces } from '../../apis';
import VnCaseTable from '../../components/Tables/VnCaseTable';

function VietNamPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTodayProvinces()
      .then((res) => {
        setData(res.data.data.cases);
      })
      .catch((err) => {});

    getAllWorldReport().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <VnCaseTable data={data} />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
}

export default VietNamPage;
