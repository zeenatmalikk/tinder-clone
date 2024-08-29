import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import user1 from "@/assets/images/user1.jpg";
import user2 from "@/assets/images/user2.jpg";
import user3 from "@/assets/images/user3.jpg";
import user9 from "@/assets/images/user9.jpg";
import user5 from "@/assets/images/user5.jpg";
import user6 from "@/assets/images/user6.jpg";
import user7 from "@/assets/images/user7.jpg";
import user8 from "@/assets/images/user8.jpg";
import user4 from "@/assets/images/user4.jpg";
import myProfile from "@/assets/images/profile.jpg";
import { ImageSourcePropType } from "react-native";

export const images = {
  getStarted,
  check,
  noResult,
  message,
};

export const icons = {
  arrowDown,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
};

export const profiles = [
  {
    id: "1",
    name: "John Doe",
    age: 25,
    bio: "Love hiking and outdoor adventures.",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 28,
    bio: "Coffee addict. Book lover.",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

export const chatData = [
  {
    id: 1,
    name: "Betty",
    imgUrl: user1,
    age: 32,
    isOnline: true,
    lastMessage:
      "That sounds like a lot of fun. Would you like to go together sometime?",
    date: "2023-10-15",
    timeSent: "5 mins",
    chat: [
      {
        sender: "me",
        message: "Hi there! How's it going?",
        timestamp: "10:00 AM",
      },
      {
        sender: "Betty",
        message: "I am doing great, thanks!",
        timestamp: "10:05 AM",
      },
      {
        sender: "me",
        message: "Have any exciting plans for the weekend? 😊",
        timestamp: "10:10 AM",
      },
      {
        sender: "Betty",
        message: "Yes, I'm thinking of going hiking. 🏞️ What about you?",
        timestamp: "10:15 AM",
      },
      {
        sender: "me",
        message: "That sounds amazing! I might just tag along. 🥾",
        timestamp: "10:20 AM",
      },
      {
        sender: "Betty",
        message: "That would be great! The more, the merrier. 🌟",
        timestamp: "10:25 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Basquit",
    imgUrl: user2,
    age: 28,
    isOnline: false,
    lastMessage: "Sure, let's do that. When are you free?",
    date: "2023-10-14",
    timeSent: "10 mins",
    chat: [
      {
        sender: "me",
        message: "Hey Charlie, how have you been?",
        timestamp: "11:00 AM",
      },
      {
        sender: "Charlie",
        message: "I've been good. How about you?",
        timestamp: "11:05 AM",
      },
      {
        sender: "me",
        message: "I've been a bit busy, but managing. 😊",
        timestamp: "11:10 AM",
      },
      {
        sender: "Charlie",
        message: "I understand. We should catch up soon! ☕",
        timestamp: "11:15 AM",
      },
      {
        sender: "me",
        message: "Definitely! Let's plan something for this weekend. 🎉",
        timestamp: "11:20 AM",
      },
      {
        sender: "Charlie",
        message: "Sure, that sounds good. When are you free? 🗓️",
        timestamp: "11:25 AM",
      },
      {
        sender: "me",
        message: "I'm free on Saturday afternoon. How about you? 🌤️",
        timestamp: "11:30 AM",
      },
      {
        sender: "Charlie",
        message: "Saturday works for me too! Let's meet at our usual spot. 🍔",
        timestamp: "11:35 AM",
      },
      {
        sender: "me",
        message: "Sounds like a plan! See you then. 👋",
        timestamp: "11:40 AM",
      },
    ],
  },
  {
    id: 3,
    name: "Oliver",
    imgUrl: user3,
    age: 30,
    isOnline: true,
    lastMessage: "Sounds like a plan! Let's make it happen.",
    date: "2023-10-11",
    timeSent: "25 mins",
    chat: [
      {
        sender: "me",
        message: "Hi Oliver, how's your day going?",
        timestamp: "2:00 PM",
      },
      {
        sender: "Oliver",
        message: "It's going great! Enjoying the sunshine. How about you?",
        timestamp: "2:05 PM",
      },
      {
        sender: "me",
        message: "That's wonderful! I'm just getting through some work. 💻",
        timestamp: "2:10 PM",
      },
      {
        sender: "Oliver",
        message: "Don't work too hard! Make sure to take breaks. 🌞",
        timestamp: "2:15 PM",
      },
      {
        sender: "me",
        message:
          "Absolutely, breaks are necessary. Planning anything fun for the evening? 🎉",
        timestamp: "2:20 PM",
      },
      {
        sender: "Oliver",
        message: "I might go to the gym later. Need to work off some steam. 💪",
        timestamp: "2:25 PM",
      },
      {
        sender: "me",
        message: "That's a great idea! I should join you sometime. 🏋️‍♂️",
        timestamp: "2:30 PM",
      },
      {
        sender: "Oliver",
        message: "Definitely! The more, the merrier. 🤸‍♂️",
        timestamp: "2:35 PM",
      },
    ],
  },
  {
    id: 4,
    name: "Sophie",
    imgUrl: user4,
    age: 27,
    isOnline: true,
    lastMessage: "Definitely! Looking forward to it.",
    date: "2023-10-10",
    timeSent: "30 mins",
    chat: [
      {
        sender: "me",
        message: "Hey Sophie, how's your week been?",
        timestamp: "3:00 PM",
      },

      {
        sender: "Sophie",
        message: "It's been busy but good. How about you?",
        timestamp: "3:05 PM",
      },
      {
        sender: "Sophie",
        message: "And also tired",
        timestamp: "3:05 PM",
      },
      {
        sender: "me",
        message: "Mine's been quite hectic too, but managing.",
        timestamp: "3:10 PM",
      },
      {
        sender: "Sophie",
        message: "That's good to hear. Any exciting plans for the weekend?",
        timestamp: "3:15 PM",
      },
      {
        sender: "me",
        message:
          "Not yet, but I'm thinking of checking out that new restaurant downtown. You?",
        timestamp: "3:20 PM",
      },
      {
        sender: "Sophie",
        message:
          "I'm planning to go hiking with some friends. You should join us sometime!",
        timestamp: "3:25 PM",
      },
    ],
  },

  {
    id: 5,
    name: "William",
    imgUrl: user5,
    age: 29,
    isOnline: false,
    lastMessage: "Let me check my schedule and get back to you.",
    date: "2023-10-09",
    timeSent: "35 mins",
    chat: [
      {
        sender: "me",
        message: "Hi William, how's everything going?",
        timestamp: "4:00 PM",
      },
      {
        sender: "William",
        message: "Things are going well. How about you?",
        timestamp: "4:05 PM",
      },
    ],
  },
  {
    id: 6,
    name: "Jack",
    imgUrl: user6,
    age: 30,
    isOnline: true,
    lastMessage: "Sounds like a great idea. Let's make it happen.",
    date: "2023-10-07",
    timeSent: "45 mins",
    chat: [
      {
        sender: "me",
        message: "Hey Jack, how's your week been?",
        timestamp: "6:00 PM",
      },
      {
        sender: "Jack",
        message: "It's been busy but good. How about you?",
        timestamp: "6:05 PM",
      },
    ],
  },
];

export const matchesData = [
  {
    id: 1,
    imgUrl: user1,
    name: "Amelia",
    lastName: "Wright",
    age: 24,
    city: "Seattle",
    country: "USA",
    bio: "A nature lover who enjoys morning hikes and weekend camping trips. Passionate about wildlife photography and preserving the environment.",
  },
  {
    id: 2,
    imgUrl: user2,
    name: "Liam",
    lastName: "Brooks",
    age: 27,
    city: "San Francisco",
    country: "USA",
    bio: "A tech enthusiast who loves coding, building apps, and exploring new technologies. Enjoys cycling along the coast and trying out new coffee shops.",
  },
  {
    id: 3,
    imgUrl: user3,
    name: "Sophia",
    lastName: "Mitchell",
    age: 26,
    city: "Dublin",
    country: "Ireland",
    bio: "A bookworm and aspiring author who spends weekends in cozy cafes with a good novel. Loves writing short stories and blogging about literature.",
  },
  {
    id: 4,
    imgUrl: user4,
    name: "James",
    lastName: "Anderson",
    age: 29,
    city: "Melbourne",
    country: "Australia",
    bio: "An adventure junkie with a passion for extreme sports. Always up for surfing, skydiving, or mountain biking. Loves traveling to new destinations.",
  },
  {
    id: 5,
    imgUrl: user5,
    name: "Isabella",
    lastName: "Davis",
    age: 30,
    city: "Florence",
    country: "Italy",
    bio: "An art historian who loves exploring museums and art galleries. Enjoys painting in her free time and cooking traditional Italian dishes.",
  },
  {
    id: 6,
    imgUrl: user6,
    name: "Lucas",
    lastName: "Schneider",
    age: 28,
    city: "Zurich",
    country: "Switzerland",
    bio: "A financial analyst by day and an avid skier by winter. Enjoys spending weekends in the Alps and discovering new hiking trails during summer.",
  },
  {
    id: 7,
    imgUrl: user7,
    name: "Ava",
    lastName: "Martinez",
    age: 31,
    city: "Barcelona",
    country: "Spain",
    bio: "A foodie who loves exploring street food markets and trying out new recipes. Passionate about photography and capturing the essence of city life.",
  },
  {
    id: 8,
    imgUrl: user8,
    name: "Mason",
    lastName: "Lee",
    age: 29,
    city: "Seoul",
    country: "South Korea",
    bio: "A software engineer with a love for gaming and anime. Enjoys attending conventions and gaming tournaments. Loves exploring the vibrant city life.",
  },
  {
    id: 9,
    imgUrl: user9,
    name: "Mia",
    lastName: "Patel",
    age: 32,
    city: "New Delhi",
    country: "India",
    bio: "A yoga instructor who is passionate about wellness and healthy living. Enjoys teaching meditation and exploring spiritual retreats around the world.",
  },
];

export const profileData = [
  {
    name: "Ethan Brown",
    age: 30,
    imgUrl: myProfile,
    hobbies: ["Mountain Biking", "Guitar Playing", "Photography"],
    bio: "A passionate adventurer with a love for mountain biking and nature photography. Enjoys playing guitar and creating music during downtime. Always looking for the next thrilling ride or perfect photo opportunity.",
  },
];
export interface chatDataProps {
  id: number;
  name: string;
  imgUrl: ImageSourcePropType;
  age: number;
  isOnline: boolean;
  lastMessage: string;
  date: string;
  timeSent: string;
  chat: {
    sender: string;
    message: string;
    timestamp: string;
  }[];
}

export interface DataType {
  cardId: number;
  name?: string;
  
  type: string;
  image: ImageSourcePropType;
  backgroundColor: string;
}

export const data: DataType[] = [
  {
    cardId: 1,
    name: "Rakha Wibowo",

    type: "mastercard",
    image: user1,
    backgroundColor: "#6d85a4",
  },
  {
    cardId: 2,
    name: "Rakha Wibowo",

    type: "visa",
    image: user2,
    backgroundColor: "#86b4ee",
  },
  {
    cardId: 3,
    name: "Rakha Wibowo",

    type: "visa",
    image: user3,
    backgroundColor: "#795de7",
  },
];
