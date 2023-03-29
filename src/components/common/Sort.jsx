import styled from 'styled-components'

export default function Sort({ content, sort }) {
  const sortDefault = sort.sortDefault
  const sortArray = sort.sortArray
  const setSortArray = sort.setSortArray

  return (
    <SortWrapper>
      {content.map((item, idx) => {
        return (
          <div key={idx}>
            <div>{item.name}</div>
            <div>
              {item.item.map((check, idxCheck) => {
                return (
                  <div key={idxCheck}>
                    <input
                      type="checkbox"
                      id={check.id}
                      name={check.id}
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
                    <label htmlFor={check.id}>{check.name}</label>
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

const SortWrapper = styled.div``
