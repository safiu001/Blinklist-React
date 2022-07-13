import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import makeStyles from '@mui/styles/makeStyles'
import React, { useState } from 'react'

type Props = {}

const useStyles = makeStyles((theme:Theme)=>({
    tabs: {
        "& .MuiTab-root": {
          display: "inline-flex",
          alignContent: "flex-start",
          flexWrap: "wrap",
          height: "36px",
          width: "200px",
          paddingLeft: "0",
          lineHeight: "20px",
          fontWeight: "400",
          textTransform: "none",
          color: "#6D787E",
          fontSize: "16px",
          borderBottom: "2px solid #E1ECFC",
          "&.Mui-selected": {
            color: "#03314B"
          },
          "&:hover": {
            color: "#22C870"
          }
        },
        "& .MuiTabs-indicator": {
          wdith: "200px",
          backgroundColor: "#2CE080"
        }
      },
      content: {
        "&.MuiTabPanel-root": {
          width: "600px",
          fontFamily: 'Cera Pro',
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#03314B",
          paddingLeft: "0"
        }
      },
}))

const TabsBook = (props: Props) => {
    const [value, setValue] = useState("one")
    const classes = useStyles()
  return (
    <TabContext value={value}>
      <Box>
        <Tabs
          className={classes.tabs}
          aria-label="secondary tabs example"
          onChange={(event: React.SyntheticEvent, newValue: string) =>
            setValue(newValue)
          }
          value={value}
        >
          <Tab value="one" label="Synopsis" />
          <Tab value="two" label="Who is it for?" />
          <Tab value="three" label="About the author" />
        </Tabs>
      </Box>
      <TabPanel value="one" className={classes.content}>
        Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s
        essential 1992 business handbook, Beyond Entrepreneurship for the
        entrepreneurs, visionaries, and innovators of today. This new edition
        combines the timeless business advice and strategy of the original text,
        supplemented with cutting-edge insights and case studies pertinent to
        today’s business world.
      </TabPanel>
      <TabPanel value="two" className={classes.content}>Finished</TabPanel>
      <TabPanel value="three" className={classes.content}>Finished</TabPanel>
    </TabContext>
  );
}

export default TabsBook