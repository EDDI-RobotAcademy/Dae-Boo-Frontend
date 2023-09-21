import CardPage from "@/views/card/CardPage.vue";
import CardSearchPage from "@/views/card/CardSearchPage.vue";
import CardDetailPage from "@/views/card/CardDetailPage.vue";

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
  {
    path: "/card-detail/:cardId",
    name: "CardDetailPage",
    components: { default: CardDetailPage },
    props: { default: true },
  },
];
export default cardRouter;
