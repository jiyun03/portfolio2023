import styled from 'styled-components'

export default function Sort({ content, sort }) {
  const sortDefault = sort.sortDefault
  const sortArray = sort.sortArray
  const setSortArray = sort.setSortArray

  return (
    <SortWrapper>
      {content.map((item, idx) => {
        return (
          <div className="sort__item" key={idx}>
            <div className="sort__name">{item.name}</div>
            <div className="sort__content">
              {item.item.map((check, idxCheck) => {
                return (
                  <div className="sort__checkbox-wrap" key={idxCheck}>
                    <input
                      type="checkbox"
                      id={check.id}
                      name={check.id}
                      className="sort__checkbox"
                      onChange={(e) => {
                        const keyword = e.target.id
                        // 기존 배열 유지
                        sortDefault[idx].item = sortArray[idx].item
                        if (e.target.checked) {
                          // 체크 된 값 추가
                          sortDefault[idx].item.push(keyword)
                        } else {
                          // 체크 삭제 된 값 filter
                          const sortFilter = sortDefault[idx].item.filter(
                            (data) => data !== keyword
                          )
                          sortDefault[idx].item = sortFilter
                        }
                        const sortChange = sortArray.map(
                          (sortItem, sortItemIdx) => {
                            if (idx === sortItemIdx) {
                              return {
                                ...sortItem,
                                item: sortDefault[idx].item,
                              }
                            } else {
                              return {
                                ...sortItem,
                                item: sortArray[sortItemIdx].item,
                              }
                            }
                          }
                        )
                        setSortArray(sortChange)
                      }}
                    />
                    <label htmlFor={check.id} className="sort__label">
                      {check.name}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </SortWrapper>
  )
}

const SortWrapper = styled.div`
  .sort {
    &__item {
      display: flex;
      &:not(:last-child) {
        margin-bottom: 7rem;
      }
    }
    &__name {
      min-width: 100rem;
    }
    &__content {
      display: flex;
      flex-wrap: wrap;
    }
    &__checkbox,
    &__label {
      cursor: pointer;
    }
    &__label {
      padding: 12rem 10rem 12rem 2rem;
    }
  }
`
