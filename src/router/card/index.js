import CardPage from "@/views/card/CardPage.vue";
import CardSearchPage from "@/views/card/CardSearchPage.vue";

const cardRouter = [
  {
    path: "/card",
    name: "CardPage",
    component: CardPage,
  },
  {
    path: "/card-search",
    name: "CardSearchPage",
    component: CardSearchPage,
  },
];
export default cardRouter;
