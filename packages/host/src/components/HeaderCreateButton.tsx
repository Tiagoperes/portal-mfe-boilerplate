import { Button, IconBox, Text } from '@citric/core'
import {
  Action,
  Application,
  ChevronDown,
  Environment,
  PlusCircle,
  SharedInfrastructure,
  Stack,
  Starter,
  Studio,
  Workspace,
} from '@citric/icons'
import { SelectionList } from '@stack-spot/portal-layout'
import { useState } from 'react'
import { styled } from 'styled-components'

const ButtonBox = styled.div`
  position: relative;

  .create {
    align-items: center;
    gap: 6px;
    margin-right: 30px;
  }

  .selection-list {
    position: absolute;
    top: var(--header-height);
    right: 0;
    width: 200px;
  }

  .chevron {
    transition: transform ease-out 0.3s;
  }
`

export const HeaderCreateButton = () => {
  const [visible, setVisible] = useState(false)
  return (
    <ButtonBox>
      <Button onClick={() => setVisible(true)} size="sm" className="create">
        <IconBox colorScheme="primary.contrastText">
          <PlusCircle />
        </IconBox>
        <Text appearance="body2">Create</Text>
        <IconBox
          colorScheme="primary.contrastText"
          className="chevron"
          style={visible ? { transform: 'rotate(180deg)' } : undefined}
        >
          <ChevronDown />
        </IconBox>
      </Button>
      <SelectionList
        visible={visible}
        onHide={() => setVisible(false)}
        maxHeight="500px"
        items={[
          {
            type: 'section',
            label: 'Account',
            children: [
              { label: 'Studio', icon: <Studio /> },
              { label: 'Workspace', icon: <Workspace /> },
              { label: 'Environment', icon: <Environment /> },
            ],
          },
          {
            type: 'section',
            label: 'Studio',
            children: [
              { label: 'Stack', icon: <Stack /> },
              { label: 'Starter', icon: <Starter /> },
            ],
          },
          {
            type: 'section',
            label: 'Workspace',
            children: [
              { label: 'Shared Infra', icon: <SharedInfrastructure /> },
              { label: 'API', icon: <Action /> },
              { label: 'Application', icon: <Application /> },
            ],
          },
        ]}
      />
    </ButtonBox>
  )
}
