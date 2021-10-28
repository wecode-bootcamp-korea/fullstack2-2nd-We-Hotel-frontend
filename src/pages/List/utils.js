const addToStorage = accomodation_id => {
  let clickedAccomodation = JSON.parse(
    localStorage.getItem('clickedAccomodation')
  );
  if (!clickedAccomodation) {
    clickedAccomodation = [];
    clickedAccomodation.unshift(accomodation_id);
    localStorage.setItem(
      'clickedAccomodation',
      JSON.stringify(clickedAccomodation)
    );
  } else if (clickedAccomodation?.length > 30) {
    clickedAccomodation.pop();
    const filteredAccomodation = clickedAccomodation.filter(
      id => id !== accomodation_id
    );
    filteredAccomodation.unshift(accomodation_id);
    localStorage.setItem(
      'clickedAccomodation',
      JSON.stringify(filteredAccomodation)
    );
  } else {
    const filteredAccomodation = clickedAccomodation.filter(
      id => id !== accomodation_id
    );
    filteredAccomodation.unshift(accomodation_id);
    localStorage.setItem(
      'clickedAccomodation',
      JSON.stringify(filteredAccomodation)
    );
  }
};

export { addToStorage };
