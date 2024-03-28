import { Flex } from '@citric/core'
import { LoadingCircular } from '@citric/ui'

interface Props {
  loading: boolean,
  error?: any,
  children: React.ReactNode,
}

export const AsyncContent = ({ loading, error, children }: Props) => {
  if (loading) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        flex={1}
        style={{ padding: '80px' }}
      >
        <LoadingCircular />
      </Flex>
    )
  }
  if (error) {
    return (
      <div>
        <p>There was an error while loading the content.</p>
        <p>{`${error}`}</p>
      </div>
    )
  }
  return children
}
