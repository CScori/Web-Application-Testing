import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { ballCount, strikeCount, hit, foul } from "./App";

test('renders without crashing', () => {
  render(<App />);
});

test("if balls less than 4 adds 1", () => {
  expect(strikeCount(2)).toBe(3)
  expect(strikeCount(10)).toBe(0)
})

test("if strikes are 4 strike reset", () => {
  expect(strikeCount(3)).toBe(0)
  expect(strikeCount(10)).toBe(0)
})

test("hit resets to 0", () => {
  expect(hits()).toBe(0)
})

test("if foul and strike is 2, strike stays at 2", () => {
  expect(fouls(3)).toBe(2);
})