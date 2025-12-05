import { ReactNode } from "react";

export interface Writer {
  status: ReactNode;
  image: string | Blob | undefined;
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
}

export const writers: Writer[] = [
  {
      id: "w1",
      name: "Jane Austen",
      avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "English novelist known for her keen observations of early 18th-century British society and memorable characters in novels such as Pride and Prejudice.",
      followers: 10000,
      status: undefined,
      image: undefined
  },
  {
      id: "w2",
      name: "Mark Twain",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "American writer and humorist best known for his novels The Adventures of Tom Sawyer and Adventures of Huckleberry Finn.",
      followers: 5000,
      status: undefined,
      image: undefined
  },
  {
      id: "w3",
      name: "J.K. Rowling",
      avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Author of the wildly popular Harry Potter series, known for imaginative world-building and storytelling that captivated readers of all ages.",
      followers: 12700,
      status: undefined,
      image: undefined
  },
  {
      id: "w4",
      name: "George Orwell",
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "English novelist, essayist and critic famous for his works on social injustice and totalitarianism, including 1984 and Animal Farm.",
      followers: 9000,
      status: undefined,
      image: undefined
  },
  {
      id: "w5",
      name: "Chimamanda Ngozi Adichie",
      avatarUrl: "https://randomuser.me/api/portraits/women/47.jpg",
      bio: "Nigerian writer whose novels and essays explore identity, feminism, and sociological themes with warmth and clarity.",
      followers: 7400,
      status: undefined,
      image: undefined
  },
];