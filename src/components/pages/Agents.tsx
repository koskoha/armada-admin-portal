import * as React from 'react'
import { styled } from "baseui"
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import { Link } from 'react-router-dom'
import { Table } from 'baseui/table'
import { Pagination } from 'baseui/pagination'
import { Block } from 'baseui/block'

import './style.scss'

const Wrapper = styled("div", {
  margin: "0 auto"
})
const Header = styled("header", {
  backgroundColor: "gray",
  display: "flex",
  justifyContent: "space-between"
})
const PageNav = styled("nav", {
  backgroundColor: "lightgray",
  display: "flex",
  justifyContent: "space-between"
})

const Nav = styled("ul", {
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex"
})

const Item = styled("li", {
  padding: "1rem"
})

const LoginBox = styled("div", {
  display: "flex"
})

const A = styled(Link, {
  display: "block",
  color: "black",
  textTransform: "uppercase"
})

const P = styled("p", {
  margin: 0
})

const TableHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  margin: "1rem 0"
})

const DATA = [
  ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
  ['Jane Smith', 32, '100 Market st. San Francisco, California'],
  ['Joe Black', 33, '100 Macquarie st. Sydney, Australia']
]

const COLUMNS = ['Name', 'Age', 'Address']

class App extends React.Component {
  state = {
    search: '',
    currentPage: 1
  }
  render() {
    return (
      <Wrapper className="wrapper">
        <Header>
          <img src="https://via.placeholder.com/150x50" alt="" />
          <LoginBox className="loginbox">
            <P>FirstName LastName</P>
            <ul>
              <li>
                <A to="#">My Profile</A>
              </li>
              <li>
                <A to="#">logout</A>
              </li>
            </ul>
          </LoginBox>
        </Header>
        <PageNav>
          <Nav>
            <Item className="active">Accounts</Item>
            <Item>System Admins</Item>
          </Nav>
        </PageNav>
        <TableHeader>
          <div style={{ width: 200 }}>
            <Input
              onChange={event => this.setState({ search: event.target.value })}
              placeholder="Search"
              value={this.state.search}
            />
          </div>
          <Button>Add New Account</Button>
        </TableHeader>
        <Table columns={COLUMNS} data={DATA} className="table" />
        <Block height="20px" />
        <Pagination
          numPages={2}
          currentPage={this.state.currentPage}
          onPageChange={({ nextPage }) =>
            this.setState({ currentPage: nextPage })
          }
        />
      </Wrapper>
    )
  }
}

export default App
