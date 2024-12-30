import styled from "styled-components";

export const Container = styled.div`
    background-color:  #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: 40px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 40px 0;

    @media (max-width: 750px){
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    h3 {
        color: #fff;
        font-size: 22px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
    }
   
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.5;
    }

    &:active {
        opacity: 0.2;
    }
`

export const AvatarProfile = styled.img`
    width: 70px;

`
export const EditUserContainer = styled.div`
  background-color: #252d48;
  padding: 20px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;

  h2 {
    margin-bottom: 16px;
    color: #fff;
    text-align: center;
  }
`;

export const BackgroundEdit = styled.div `
    background-color: #181f36;
`

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }

  input:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
  }
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.primary {
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s ease;
  }

  &.primary:hover {
    background-color: #0056b3;
  }

  &.secondary {
    background-color: #f5f5f5;
    color: #333;
    border: 1px solid #ccc;
    transition: background-color 0.3s ease;
  }

  &.secondary:hover {
    background-color: #e4e4e4;
  }
`

