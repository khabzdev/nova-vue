<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Navigation Menu</h1>
      <p>Site navigation with dropdown menus.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-4 w-96">
                <li>
                  <NavigationMenuLink as-child>
                    <a href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div class="text-sm font-medium leading-none">Introduction</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn about the basics of Nova Vue.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a href="#" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div class="text-sm font-medium leading-none">Installation</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How to install and set up in your project.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-96 gap-3 p-4 grid-cols-2">
                <li>
                  <NavigationMenuLink as-child>
                    <a href="#" class="block p-3 rounded-md hover:bg-accent">Button</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a href="#" class="block p-3 rounded-md hover:bg-accent">Input</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a href="#" class="block p-3 rounded-md hover:bg-accent">Dialog</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a href="#" class="block p-3 rounded-md hover:bg-accent">Select</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <a href="#" class="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                Documentation
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </ComponentPreview>

    <h2>Usage</h2>

    <CodeBlock :code="usageCode" lang="vue" />

    <h2>Components</h2>

    <table class="props-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>NavigationMenu</code></td>
          <td>Root container</td>
        </tr>
        <tr>
          <td><code>NavigationMenuList</code></td>
          <td>List of menu items</td>
        </tr>
        <tr>
          <td><code>NavigationMenuItem</code></td>
          <td>Individual menu item</td>
        </tr>
        <tr>
          <td><code>NavigationMenuTrigger</code></td>
          <td>Trigger for dropdown content</td>
        </tr>
        <tr>
          <td><code>NavigationMenuContent</code></td>
          <td>Dropdown content area</td>
        </tr>
        <tr>
          <td><code>NavigationMenuLink</code></td>
          <td>Navigation link</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@nova-vue/ui/navigation-menu'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul class="grid gap-3 p-4 w-96">
          <li>
            <NavigationMenuLink as-child>
              <a href="#">Introduction</a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`

const usageCode = '<' + `script setup lang="ts">
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@nova-vue/ui/navigation-menu'
<` + `/script>

<` + `template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink href="/">Home</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</` + `template>`
</script>
