import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
// export const testimonials = [
//     { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
//     { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
//     { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
// ];


export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Paris, France",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides."
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!"
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "London, England",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!"
  },
  {
    id: 4,
    name: "Noah Patel",
    address: "Mumbai, India",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUWFRUQFRUQFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABBEAABAgQDBAgEAwUHBQAAAAABAAIDBBEhBRIxQVFhcQYTIoGRobHwBzLB0SNC4RRSYoKSJDNTY3Jz8RYXJTRD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgIBBQEBAAMBAAAAAAAAAAECEQMSITEyQRNCIlHhBP/aAAwDAQACEQMRAD8A80YAk5iqWvIOqIZMu5qLgV1oJdDTMi6yMTsT4jUEtwt7EZauFSNauxYdkziKpEFU8PULDVSOhIDHHvRMsUBFFEVLaIisNL01zk0NSe2ixiNxSaulqaFjFnLGyLaVFIMBCPhy4JQ9CQwZQxHUCJncGcG1RUgwNdqrGfijJqEwtmRgODbFEiO1DTLG33oYupqtRrDpoghAwnXRkQgsqEDANXLGLyWNlJECZLRBS6mfGasYDisQb2qwiR2oGJGCISFwQkwjOsB0Qc0sABcU9moUJN1OzUJWMWMkO23mFsHN9FkZH5281s3N05KGXktj4ImhItsnALtLKY4KYSSJASWMeXzMMZk1oAUbnEpLus4qDoLrd6sMRlg2G11blVUv9Vd4h/dMrwSrkd8FO19E+JFqEyZI2IcBFsVE8qypVi+DQIPC2VeArvEJF5cGs1NFO9x/DMTYcDYK5wrD3luYiy0zPhzNGH1hc3StKFFdGujExMtcxjw3IS01FbhHUgUzOxJMhCTMGi9Hd8L5z/HZ/SfuoZj4dx4Q7bw/kKJXKhlGzzeoUbithO9EXAkaHdospiWGxIbsqKkmZxZaYcLK4k4dSqmQw2PlBC7PR3S47Tu2dGjWm8nYFo7szVIMxqahwbudQ7ALk8gs47pNXSG483bO4FATDxEdme4ucd+wcAojbTTwVlEk2WR6Qt2wvB1fUI4YnAitoLHc6xPJZ4gOtt2c1BFgFq1Gs0eejaKGUeM11X4XiOQ5X3adv7p+yJj2dUJXsMtzSNitoudc1Zzr3Jde5C0bSy7ivahX5VW9cVzrSjqRtLLFpAUE08UQnWFNc4lbUZRIXOuioT0JEYp5ZqWxi3wy8RvNbksWIwiH+I3mt0Vz5eS+Pghom5U8hcKmOMoknpIgPL5OVDtUQZALuHBFkLtOKx8lhIyZ9xXpPRn4dwZyA2LGLr6UcRQdyxch/wCv3r274eH+xQ+SSXI64MwPhBJ7c5/nKhmfhJKBpIzVpbtFeooabPZdyQCj5ilpDqp10HXI4ha2dAhRobjpVqpHCuKRP9w/RafpCxudmYWq1J+hn1PR5Wd6yXt+6qX4Wyb4f7RnreM7zobK1w2YhthWpojujLmkOI2uJR9B4X4KHmYddURRNjBPJbCRe55F8RsR6ibhgaFhr42WJxiZEQhw4eq1vxalesmoQH7h9Vi5uTMINB4HzS0h7ZtJaOyFL9Y8gNaKk8AF5fFhxJyYe9taPcSCbUbsHhTwV30kn87Gy4NhlzcXGlPCo8VqMAwlsNrWgbBVLfzV+soo/R14jLyfQs6uN/FdHQqM4kaD6L0uXg8EdDglKssyrwQPLInQUAfPflfkqKdwSLBqBceYC9mmZVZ7GJIEFZZpJ7meCDWx49GZQkfpRWGEnrCIZN9n2VvjeFA1IsfeqzcFzoTwdC0h3huXQnqRyuLg6NWMBNQLq96N9BxMTDYTyQ2hLqG9ArqBCa4NcBqAfFa3oPLj9qJ3QnerUHHYCluOb8JcOpdr6/7j/umRPhHh50EQfzuP1XoCSPziD6M84Hwfkq6xKf6iqbpj8NJWXgOiwswoDUlxNDStbr2BV3SOVbFlo0NwqHQ3W40NO9CUElZlJ2fKDW5iAtRhPR3O8N3hZuT+dvcvUui0KsZv+kJJukVgrYN/0t1VHbkRRbHFpf8ADJWOK5m7L0kMITCFM4KOixhoCSckiA8ukItK12IyVjZqqpa/VWEg7ZwXccJooNpYlet/CSOXSdzoTTkvGxOAQer2lX+CdNHyEPI1mavGlCklzsOuD3l8WiFmovYdyXj7PiVGeflA76qOa+IUfKW5Bca1QcXRlJWZxrv/ACcQ/wCYfotX0rcBCzbsvqsHhccumc51JJK0XSqbJbl30qkS/mij6MuejuNgscHO0Hktn8PcTbGL2tPyuIp3Lw+UjOa00KNwLGI8oc8J5a4nmCeIVHBWS1Oj6gooYtN68ck/iDiEcZQ+G3iGX9VdwMSmnNq+MS4cAPJGdUCNtlf8TC1s5CdX8ju64WJx2OHFpB3eqt8bwqNGc6I+KXOOld25UuIYa6HCDncEriNFv0oJB5dMHNsiGvcTT0XrGGuBaDvXl0xKkTbKWEXI6o/pPf8AdbaanIwaIUuBmoCXE0DW7BzU8i1NHThelM28rAJCJbCcvLY83iEMjNHt/BU250C3HRfFHRIdHElwFybElK0olFJy8D55rWir4jWjiQPVY7F8Yl6kCKLHmO8hBdKZl0eI8AENGprTbT9FRxJeFB7JlnPdQ1denIODiDyCMYpqwSlJOgzGWtiNq1wNtQahYKaDsxDtdFq5VjDUsYWbC29+5VcaUzzIFNzzt7I19Ang62I5E5Uz0bD4oaxg1o1o8AFtugsYGYcP8s08WrDysA27kRNTUSC5sSC7K5pr3bQRuVCFentiS8U/7sTbXZXCGf5D90TG+J04QOrELvaTbxT7insax3S3pfLQoUxD6wZ2tcwt/NmIpbxWNb8Sp6lC2DfbldY/1LD9InufmiPNXOJLjvJSzTaGi6ZnsPHbavVui8ZojC/5V5RA+YK/lMRex4IOilONotCVM9pxSM0wnXWLCqpTGokQhpdYq2AXO40XTs4QmNCmUQQMNoku0SWMeQQ4diUXh779y5AIUsswNqvQOALZcjmhsdjkPClgvuOagxptXKa7FPyDQ55w0Vg2NmF1VNhaKwAoE8hEEYXaKFc42+pVHIu7YVliT6lR/RV9QGA6lVyYihNch4x9VT0TwuMJm8mi0MrjTy01dosRKRCrOUinKUskPGW1B8TpDFqRVA4hjbojQwqtivNSgy45weI9UaBqZsJzD3GFAjZLsiMDiNQxx28AQFdTGFxIjQ1ri0akt1PjZFYPFEWWeylSYTjTe4NNFe4OGua07wD4iqjPk6cSVGYh9HavDgwlwFKupSuXKXFtTmcRtWmwmTyGm4UVnM5GCgu42A4oWQmILXhr4rM5uW1FR3bErbexVJLgzmJQBDjnYHEePBFswQP0LvH9F3pNisq2LlIc6gvlGeld/mg8I6TMY0Vf2akAO1Arby2LUw7HcRwhkMfKBRZCUhf2to/geN/5m07rrY9KMahiHmrYiopeo9leeSWIF85DNQ0XFSaDSuvcEyV2SnJJo9ChxAbaEWpxChjgGt9iB6smrgTdQfs779o6q8eDjk92ZrFZcteTqKp0lEoNVZ4lKGl7qohN1TtioMiTdtVWzU659jonltioOptVL4H0hh6o5jroJuqLaLpBy7wR1YjVsqLFYB/etW4LVz5eS+PgYo3BTEJjmqY5CknUSRMeSSpuiqoKV1RS7zhJ4ezmosX+YKWBsUOLfMEn6H/II1G1sosOgh7w0mgR2JwAx1GmoonYiIJM9oKymXKsldUfHKkuSr4IIpQbyiopQmSp704hNKhGwjZQyEuSjGNADgDz8HLNGTK+Mhi3RHzUCgArcmgHl7KYYADa147NB6bPELGNz0bihrWmthSvLagMN6TugxBALey15hZv4Q6kM04toUsHfRg4+/FUePy9IpePlflrT/EArXh2RXuKXSmOpuPBpelPSaJBjgC2Wmu2orbyVO7E5gkxMtS4WoGgabfE6qCbxZsaLDe8dpjA12lHZRXMN4o6q00viUr1ZiMrmb+StCTWgtsNdqXTprYvGam3boy8dsxEt1YNhWg8zlUcDB4jm5rkCtRf8tKgUuTUjaFpInSYPJYGDLbNUkkW+9NiqMUxwO/Dh0y7bba0tXmmp3sCfzSu7G9JXsbJy7GkEkVsa9kmpHos1horMMpeh8gCo4kQvpmcTuFtSTv3kG3BXvQySaYzXnkK020NabP+U+nSczlqNlLsNBUJziAtezDWlosNFV4lhrQCRqiLZnJ1gLVmI7RU0VhiUyQS3ZVVbihYaExgUE82gUsMqLENEAormao1ouhIQ7QVi1l0o3pZ9Hh+M1bghYzo8z8ULaLnycl8fA3KmuCeU2imORJLtEkTHjUubogRELCaa2UzWO3LvSOCw2CdFBi57QU8BhoFFikMudYVSfop+QJjyDUI3OSKm6jl8Oe5wFNVZTMi6F2XBOxECymqLmDdQQWUIUszqprko+pG82TZZq44p0q6iYTwtIFGiqgLxQgbeFPqePinCIKKEuuizIbNRbgjZe+/MT9VFFitIANaW50+qUyUJE2IMMTV4bGGQV2AeQp9AposJkYOY6tCLbwcpFeGqFwuDmYrORlDmWMzGz0m+A4Z9BUZwOyasDR6ea7LTkMOzGta1I4VsOWnmtrEYyKXsN6EA94B+qz0/wBEqu7By7ge039EPpW0h/k2k4gLsSh1fsDsxtvdWnr5IGYxFpcNaUArS+oOldLURUfojMNOwjePsiZHou4EZgSeOgR+kUD5TfhW4dKl+UkEAOB7gXH0d5LVYNFZBisB0JawcCGkVO4WRbMKENun2QceXA7dP9I8q80kG8kik4LHE9MbirWihtZUmJ4oH1y3VdLTX7TDB/MLOvt38iiJGQDakqjfhzmTxFpqUCFqOkMqKZgqSDJEtqgECgsqVHiLSAipUZXkFOxeF2a8KrBXJQsNwrKG+6robalHwW3QGZedHT+KFtCsZ0ab+MFtCubJyXx8DCEi1SEJEJBwfKkpEljHi0lFAN0cIzabFTZSCpWVXop7HntF3DeKBFQ4rWm4uqyT2KWe+ZTv+RWv4Bz50Ahw1CgnsTMQ1cgExwTtk0g2G+pCdM6qKUYdU+ZN1JclZdSNybCXYjCNVyGE/onhYSsKu1cmpc5gAVFBzBPJOYXRAiaelsrO5U8XYreaiEiihh4NGcWktLG73WNODdStpb4DF0aDArNCtmRg3mbAD1O4IGTDITDWwArne4UA300H6rM4v0pe4lkqCBtiU7RH8IOnM35KvzS7Car4LwRermqnSIKcA9hPmQ4/0rUw4dRULBy0KI6DD6134tasLiavpcAuP5qEi+tuK2/R+NmZQ1qLEbQeIXN/0xqV/wBnZ/zStUFOl81K6eKfBk732IyFDNdbKux3FGwGUb2ojvlG7ieC5oxcnSLykoq2VvSLEIUBtYhtsA7RPIKkM7DjNzw3BwGuoI3Zmm4QjoDoji95zOOpOzgP0UETBnNPWw3FrqWptB1qNotoV6eHHoVI87Lk1uywkYrmHMwkG+nod610liTXNveo4V7wsRLxSW9oUcLkXoeLa+mxGQ39kAHiN44quhPklZcY9EaW2OqZIPYIYrRCsm2uaRFbm3Gl0oUsxwOQ14bRzUpYmuBrB40Nr4nZoiOkko1sCu2iBfAcx1kLjs28toUjpLcK3ZRQT2laQyKqqhao+EFEszRdHKdaFsFjeiw/FHJbQtXNl7F8fU6RZNCfsTAEg4sqS6uImPDst1KGqJxupA5d5wMNlRopMQ+ZRymxOxPVT/RX8g9VxxUYckDdOyaDZZx0UUcElSywTJx90keSkuDrohIoU+WQ4U0ud2tfEp/SfhaS8OpAAqSixh4BBcda2GnirKQkDDaQfm7Of+apyjlZF/sYcQAKnadgFdvcuiGL1iOQBLNyjsgDiBfxRBprcnaTfu4qaLAo4N2UJrvKje4dw0G08TwVeBCsxeT60NaTRoJJb4Ur5qOVwxjNGj1Vq5uYhTtbSle5GkYaJNsSGWOHI7jvCfhznQ3ZXfM3R377eO9TQag++aniQw4EHmCNQdhCEoxkqYYycXaCJvGgIdvm0G2nFUIk3O7byS5x01PElOZG/FAeN1DpsN6U0srF8RuagNSAOJqdfopYsUYcFMmSU+SOFKtaK05DYO7ah5lwud1tNqLiOtX3p+qAim3n3lXJA8WCHDSh1rxUTWZQ7v40G5EgWqpIUvmaeVBzoswlcxunu5TchqrCHBqwHbTzUzJYOodlO9A1ABm4lMtc19oBPiUNicsYraNHb2DfwrsPkrQS1Ta322++CKgEN+UV2E7+9JKKa3CtmYBkMtfRwII1BsVbSrFZY9JZx1gHbb838TfuFXShsVxzjp2Lxdlv0X/vu5bQhY/oy2sevBbJy5c3Y6MXU5RNYnVTWnVSHOUSXUkTHhTtU9qZBjlsSpFRcHknE3O6q9A4A+U2KTEBdRSWxSYl8yl+iv5BQxIMXQkE7EQZLpk3DqU+XXY+qSPJR8AuSi0nQ3C87uucOyw9iu1+/kPXks84VsNTQDmV6XhMINhNZSmWrSN1DRXxxt3/AESk6RDEbTrNfyvrwFj6eaMc8NZrQAVPIC6UVlb03gje02I97kPiI/ANduVpI2tLg0kd3quokDwquAJsXaDcw6J0aCNnBERR2m7g0aeSbEFisAFa2ikDPRL36pzN+/n72oWajuXjuKedgXKeY539hdhiruQ81g0TQW6Dko4upO9x50FvopYR7QUbx6n1KJqIYrLD3x+igfC98PYRsQfXauADT36LDJAoh0FxsqpoDcoA931UzQKae6Jo0PsrBoGy5Tl/iIHI9pSUtbU2Avqftr3KWOwEtPf5Fq48Xts9nv2eKxqIGwdn5a97uPAfZKJQKZ6geyvvegzUDRXKjfCy5huNuWxaCIPD9FVYg0VJ3hc+dbWNj5oM6I3i9y2b1jOhp/FPJbKIV5+XsdePqcJUYTimqZQfRJNzLiwDxF0GpXOqKTHuTuscvQpnDaCpQUpzU2I6qKUJtXepMQJrYJKeofbSDhOATAXbk7Mdyd2KqCpdKNqmS8SqfFadgSRW40uCz6KygfMNLtGdr+bRv37luIzaEvHDOO6zhx/RY7o4XMa+JSwiQweXa9KjxW0e/bv8wV241USDYxz63F/qOHFC4hEDoDgNl+6tfuuxxkcKaOuNxO7gf1ULjUlumYFrhzFPWl04CeFXK129rfRPit2JsgPw2V2MbXnRcz1cQNlKoMyI63Thb3VItoduu/7FJ4NvfqgNR335p8vq4+6KNoREsKA/89yyMPg6n3YhMIsDwCLix8xJpTs6VrS+laDl3KF3u16c0Q0DtHqFzMpXDgowPLuWCcZfanEa+9iYEs2h97VjD3O04MJPiuCwA27ee3zKii3zVsMwBNPysGY1/qA8VLDG07b+lkyFvcjp42TH+9iledgUcU37tlrfRajWDPJvrTz92VXijvRWsU2r4DfVUuK2B37eahm6saHYO6Fn8Y8ls3lYjoM78R3JbVxXl5Ox24+pwrlF1JIOIhJdLlxYB4tDUjWpJL1jzCeEKAc0c5lVxJTj3Ky6DuqChjQrLqStLgigaBDVhBCSSjj7Fp9TZYLJDqMh/wDoCXd+nlRMkXEVguuWWB3t2HwSSXYSCCwPaWnu31VdHcWkBxrudt7+KSSBg2dmOrgAt1IaG8zSnqpIMEQ2Aakane7aUkkGZDdTs811/L3RcSQHOMHvcp5cVaTxSSRRieE05TTcd3NcJGlx90kljIj/AF+oUL4iSSwRuZRudQnl911JEB2QYYrmM0zGp3UFSO+w/pU+IM6uL1YdXsh26lSRTyXUlD6S+lef4X+cflq9/wBIX2NNu3xTA0C5vUXPj9kkleLuKZzzVSaI4zdHHu4D7qgxhtjzSSU83U0OQroOyj3clsiUkl5OXsd+PqdauPKSSQcHfFuupJLAP//Z",
    rating: 5,
    review:
      "The app interface is smooth and user-friendly. I booked a luxury resort in Goa in just a few clicks. Impressive and effortless!"
  },
  {
    id: 5,
    name: "Isabella Müller",
    address: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=200",
    rating: 4,
    review:
      "I love the curated hotel selections and exclusive deals. QuickStay has become my go-to travel companion. Danke schön!"
  }
];


// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData1 = {
    "_id": "67f76393197ac559e4089b72",
    "name": "bc",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData1,
        "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 249,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 199,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}





// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/