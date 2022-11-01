import { css } from '@emotion/css'
import { useContext } from 'react'

import Epic from './Epic'
import User from './Users'
import FiltersContext from '../context/filters'
import { useEpics } from '../Hooks/useEpics'
import { useUsers } from '../Hooks/useUsers'
import { rem, SPACING_1, SPACING_2, SPACING_5 } from '../style'

const cssUsers = css`
  display: flex;
  gap: ${SPACING_1};
  width: auto;
`
const cssUserEtc = css`
  aspect-ratio: 1;
  border-radius: 100%;
  width: ${rem(0.5)};
  height: 80%;
  background-color: #eee;
`
const cssEpics = css`
  ${cssUsers}
`

const cssFilters = css`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${SPACING_5};
  gap: ${SPACING_2};
  justify-content: flex-start;
  align-items: center;
`

const UserFilter = () => {
  const users = useUsers()

  const { filters, setFilters } = useContext(FiltersContext)

  return (
    <>
      <div className={cssUsers}>
        {users.map((user) => (
          <User
            key={user.name}
            profile_picture={user.profile_picture}
            user={user}
            name={user.name}
            id={user.id}
            selected={filters.user}
            onSelect={(user) => {
              setFilters({ user })
            }}
          />
        ))}
      </div>

      <div key={'1'} className={cssUserEtc}></div>
      <div key={'2'} className={cssUserEtc}></div>
      <div key={'3'} className={cssUserEtc}></div>
    </>
  )
}

const EpicFilter = () => {
  const epics = useEpics()
  const { filters, setFilters } = useContext(FiltersContext)
  // const context = useContext(FiltersContext)
  // context.setFilters

  return (
    <div className={cssEpics}>
      {epics.map((epic) => (
        <Epic
          key={epic.name}
          epic={epic}
          name={epic.display}
          selected={filters.epic}
          onSelect={(epic) => {
            setFilters({ epic })
          }}
          color={epic.color}
        />
      ))}
    </div>
  )
}

function Filters() {
  return (
    <div className={cssFilters}>
      <UserFilter />
      <EpicFilter />
    </div>
  )
}

export default Filters
