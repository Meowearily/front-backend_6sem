import { Select, Portal, createListCollection } from "@chakra-ui/react"

export const filters = createListCollection({
    items: [
      {label: "Сначала новые", value: "new"},
      {label: "Сначала старые", value: "old"}
    ]
})

export default function Filters() {
    return (
        <Select.Root collection={filters} size={"sm"}>
            <Select.HiddenSelect />
            <Select.Label />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Выберите фильтр" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {filters.items.map((filter) => (
                    <Select.Item item={filter} key={filter.value}>
                      {filter.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
        </Select.Root>
    )
}