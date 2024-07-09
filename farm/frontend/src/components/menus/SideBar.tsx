import React from 'react';
import { Link } from 'react-router-dom';
import { ANIMALS_LINK } from "../routes/Elements";
import { StyledNav } from "./styles";

export default function SideBar() {
  return (
    <StyledNav>
        <Link to={ANIMALS_LINK}>Animals</Link>
    </StyledNav>
  );
};