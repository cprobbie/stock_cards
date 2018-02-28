import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

const LeaderBoard = () => (
  <Table basic='very' celled collapsing style={{ width: 200, margin: '0 auto'}} compact='very' >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Player</Table.HeaderCell>
        <Table.HeaderCell>Profit</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lena
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          22
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Matthew
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          15
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>

            <Header.Content>
              Lindsay
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          12
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Mark
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          11
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default LeaderBoard