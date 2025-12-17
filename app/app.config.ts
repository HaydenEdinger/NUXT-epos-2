// app/app.config.ts
export default defineAppConfig({
  ui: {
    primary: 'teal',
    gray: 'neutral',

    button: {
      slots: {
        base: 'rounded-[var(--radius)] font-bold',
      },
      defaultVariants: {
        size: 'md'
      }
    },
    
    input: {
      slots: {
        base: 'rounded-[var(--radius)]'
      }
    },

    card: {
      slots: {
        root: 'rounded-[var(--radius)] border border-border bg-card text-card-foreground shadow-sm'
      }
    }
  }
})