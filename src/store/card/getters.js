const getters = {
  activeCards(state) {
    return state.cards.filter((card) => card.isActive);
  },
};

export default getters;
