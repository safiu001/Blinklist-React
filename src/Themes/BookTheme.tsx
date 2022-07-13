import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme)=>({
    mainContainer: {
        paddingLeft: "20%",
        paddingRight: "15%",
        paddingTop: "60px"
    },
    
    flexCoverContainer: {
        "&.MuiBox-root":{
            display: "flex",
            justifyContent: "space-between",

            marginBottom: "58px",
            marginTop: "40px"
        }
    },

    flexLinksContainer: {
        "&.MuiBox-root":{
            display: "flex",
            justifyContent: "space-between",

            paddingRight: "20px"
        }
    },

    bodyLeftContainer: {
        "&.MuiBox-root":{
            width: "510px"
        }
    },

    bookComment: {
        "&.MuiTypography-root":{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#03314B"
        }
    },

    bookTitle: {
        "&.MuiTypography-root":{
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "45px",
            color: "#03314B",

            marginBottom: "24px"
        }
    },

    bookCaption: {
        "&.MuiTypography-root":{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "25px",
            color: "#03314B",

            marginBottom: "24px"
        }
    },

    bookAuthor: {
        "&.MuiTypography-root":{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#6D787E",

            marginBottom: "19px"
        }
    },

    bookTimeContainer: {
        "&.MuiBox-root": {

            marginBottom: "80px"
        }
    },

    readBtn: {
        "&.MuiButton-root": {
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20px",
            textTransform: "none",
            color: "#22C870",
            borderColor: "black"
        }
    },

    linkContainer: {
        "&.MuiBox-root": {
            display: "inline-flex",
            flexWrap: "wrap",
            alignItems: "center"
        }
    },

    link: {
        "&.MuiLink-root": {
            textDecoration: "none",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#6D787E",

            marginRight: "11px"
        }
    },

    arrowIcon: {
        color: "#6D787E",

        "&.MuiSvgIcon-root": {
            height: "16px",
            width: "17px"
        },
    },

    span: {
        display: "block",
        height: "1px",
        width: "912px",
        backgroundColor: "#E1ECFC",

        marginTop: "80px",
        marginBottom: "177px"
    }
}))