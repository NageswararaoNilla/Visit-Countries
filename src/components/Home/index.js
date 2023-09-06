import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  CountriesList,
  ListItem,
  ListPara,
  ListButton,
  VisitedCountries,
  VisitedListDisplay,
  ListItem1,
  EmptyContainer,
  EmptyHeader,
  ItemBox,
  ThumbItem,
  NameBox,
  NameOfItem,
  DeleteButton,
} from './styledComponents'

class Home extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    list: this.props.list,
  }

  onClickChangeVisit = id => {
    // console.log('clicked', id)
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  onRemoveVisit = id => {
    // console.log('removed', id)
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {list} = this.state
    // console.log('list', list)
    const nonVisited = list.every(each => each.isVisited === false)
    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Countries</Heading>
          <CountriesList>
            {list.map(eachItem => (
              <ListItem key={eachItem.id}>
                <ListPara>{eachItem.name}</ListPara>
                {eachItem.isVisited ? (
                  <p
                    style={{
                      font: 'Roboto',
                      color: '#94a3b8',
                      fontSize: '14px',
                      marginRight: '10px',
                      marginTop: '10px',
                      width: '80px',
                      height: '30px',
                      'text-align': 'center',
                      padding: '8px',
                    }}
                  >
                    Visited
                  </p>
                ) : (
                  <ListButton
                    isVisit={eachItem.isVisited}
                    type="button"
                    onClick={() => this.onClickChangeVisit(eachItem.id)}
                  >
                    Visit
                  </ListButton>
                )}
              </ListItem>
            ))}
          </CountriesList>
          <VisitedCountries>
            <Heading>Visited Countries</Heading>
            {/* <h1
              style={{
                color: '#ffffff',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}
            >
              Visited Countries
            </h1> */}
            {nonVisited ? (
              <EmptyContainer>
                <EmptyHeader>No Countries Visited Yet</EmptyHeader>
              </EmptyContainer>
            ) : (
              <VisitedListDisplay>
                {list.map(eachItem =>
                  eachItem.isVisited ? (
                    <ListItem1 key={eachItem.id}>
                      <ItemBox>
                        <ThumbItem src={eachItem.imageUrl} alt="thumbnail" />
                        <NameBox>
                          <NameOfItem>{eachItem.name}</NameOfItem>
                          <DeleteButton
                            type="button"
                            onClick={() => this.onRemoveVisit(eachItem.id)}
                          >
                            Remove
                          </DeleteButton>
                        </NameBox>
                      </ItemBox>
                    </ListItem1>
                  ) : (
                    ''
                  ),
                )}
              </VisitedListDisplay>
            )}
          </VisitedCountries>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default Home
