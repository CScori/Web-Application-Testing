TESTING?
yarn add -D @testing-library/react
yarn add --dev jest


jest allows helper functions of test and toBe

in rtl import render 
it('renders without crashing', () => {
    render (<App />)
})

verbose testing implement
test('lions header is there', () => {
    const { getByText } = render (<App />)getByText('Lions');
})

test('lions header is there', () => {
    const { getByText } = render (<App />)getByText(/lions/i); <-- /word/ is wrapped by regex > i ignores casing
})
//restricted to a single instance if more it will fail

//catch all is a test id ... failsafe give element srcd for data-testid

test('lions header is there', () => {
    const { getByTestId } = render (<App />)getByText(/lions-header/i); <-- /word/ is wrapped by regex > i ignores casing
})


unit testing inreact

test outside of cmpnt fnct
create const function for maths
export const addTouchDown = currentScore => {
    return(
        currentScore+ 7
    )
   
}