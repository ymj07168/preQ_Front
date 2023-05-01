import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 16px;
`;

const Button = styled.button`
  border: solid 1px;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: white;
  color: black;
  font-size: 1rem;
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #F1F1F1;
  border-radius: 8px;
  
  &:hover {
    background: #0D2D84;
    // font-family: 'Open Sans';
    // font-style: normal;
    // font-weight: 600;
    // font-size: 20px;
    // line-height: 18px;
    color: #FFFFFF;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: white;
    color: black;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #0D2D84;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;