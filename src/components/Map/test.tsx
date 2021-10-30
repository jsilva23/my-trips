import { render, screen } from "@testing-library/react";

import Map from ".";

describe("<Map />", () => {
  it("should render without any marker", () => {
    render(<Map />);
    expect(
      screen.getByRole("link", {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });

  it("should render with the marker in correct place", () => {
    const place = {
      id: "1",
      name: "Petropolis",
      slug: "petropolis",
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    const placeTwo = {
      id: "2",
      name: "Luanda",
      slug: "luanda",
      location: {
        latitude: 1,
        longitude: 1,
      },
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument();
    expect(screen.getByTitle(/luanda/i)).toBeInTheDocument();
  });
});
