import { css } from '@emotion/css'
import { useCallback, useEffect, useState } from 'react'
import FuzzySearch from 'fuzzy-search'

import {
  BACKGROUND_COLOR,
  color2,
  color6,
  color7,
  color8,
  rem,
  SPACING_1,
} from '../style'

const cssSelected = css`
  padding: ${SPACING_1};
  color: ${color8};
  display: flex;
  gap: ${SPACING_1};
  text-align: center;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  overflow: hidden;
`

const cssSelectedOther = css`
  ${cssSelected}
  color: ${color2};
  &:hover {
    background-color: ${BACKGROUND_COLOR};
  }
`

const cssSelect = css`
  text-align: center;
  padding: ${SPACING_1};
  outline: none;
  border: ${rem(0.1)} solid ${color7};
  background-color: ${color6};
  text-transform: uppercase;
  color: #fff;
  overflow: hidden;
`

const cssFocus = css`
  position: fixed;
  min-width: ${rem(1)};
  padding: ${SPACING_1};
  width: 10.1rem;
  display: flex;
  flex-direction: column;
  gap: ${SPACING_1};
  cursor: pointer;
  border-left: ${rem(0.1)} solid ${color7};
  border-right: ${rem(0.1)} solid ${color7};
  border-bottom: ${rem(0.1)} solid ${color7};
  background-color: ${color6};
  z-index: 10;
`
const NULL = {
  id: null,
  display: 'Select...',
}

const SelectEmptyRender = () => <div>No items found</div>

const itemsToSelectItems = (selectedID) => (item, idx) => {
  const id = item?.id === undefined ? idx : item?.id
  const requiredData = {
    id,
    selected: selectedID === id,
  }
  if (typeof item === 'object') {
    return { ...requiredData, ...item }
  }
  return requiredData
}

export const ItemRender = ({ selected, item, onMouseDown }) => {
  return (
    <div
      className={selected ? cssSelected : cssSelectedOther}
      onMouseDown={onMouseDown}
    >
      {item.display}
    </div>
  )
}

const SelectItems = ({
  items,
  onSelect,
  EmptyRender,
  ContentRender = ItemRender,
}) => {
  if (!items?.length) return <EmptyRender />
  return (
    <>
      {items.map((item) => {
        const { selected } = item
        return (
          <ContentRender
            key={item.id}
            item={item}
            selected={selected}
            onMouseDown={() => onSelect(item.id)}
          />
        )
      })}
    </>
  )
}

const Select = ({
  value = undefined,
  required = false,
  items: defaultItems = [],
  onSelect: onSelectHandler = undefined,
  SelectedRender,
  ContentRender,
  EmptyRender = SelectEmptyRender,
}) => {
  const [focus, setFocus] = useState(false)
  const [selectedIDSelf, setSelectedID] = useState(required ? 0 : null)
  const selectedID = value === undefined ? selectedIDSelf : value?.id ?? value

  const [searchTerm, setSearchTerm] = useState('')
  const [searcher, setSearcher] = useState()

  const [items, setItems] = useState([])
  const selectedItem = items.find((item) => item.selected)
  const onSelect = useCallback(
    (id) => {
      if (onSelectHandler) {
        const selectedItem = items.find((item) => item.id === id)
        onSelectHandler(selectedItem)
      }
      if (value === undefined) {
        setSelectedID(id)
      }
      setFocus(false)
    },
    [onSelectHandler, setSelectedID, items, value]
  )

  useEffect(() => {
    setSearcher(new FuzzySearch(items, ['display']))
  }, [setSearchTerm, items])

  useEffect(() => {
    // TODO nao adicionar todo a lista de items caso seja 'required'
    const items = [NULL, ...defaultItems].map(itemsToSelectItems(selectedID))
    setItems(items)
  }, [defaultItems, selectedID, setItems])
  return (
    <>
      <div onBlur={() => setFocus(false)} style={{ width: '11.1rem' }}>
        {!focus && SelectedRender ? (
          <SelectedRender item={selectedItem} onClick={() => setFocus(true)} />
        ) : (
          <input
            onBlur={() => setFocus(false)}
            type="text"
            value={focus ? searchTerm : selectedItem?.display}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setFocus(true)}
            placeholder="Select ..."
            className={cssSelect}
          />
        )}
        {focus && (
          <div className={cssFocus}>
            <SelectItems
              items={searcher ? searcher.search(searchTerm) : items}
              EmptyRender={EmptyRender}
              ContentRender={ContentRender}
              onSelect={onSelect}
              required={required}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Select
