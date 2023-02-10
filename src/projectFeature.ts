import { Autobind } from "./decoretors"
import { validate } from "./validation"

class ProjectList {
  outputEl: HTMLDivElement
  templateEl: HTMLTemplateElement

  constructor() {
    this.outputEl = document.getElementById('app')! as HTMLDivElement
    this.templateEl = document.getElementById('project_list_template')! as HTMLTemplateElement

    const importedNode = document.importNode(this.templateEl.content, true)

    this.outputEl.insertAdjacentElement('afterbegin', importedNode.firstElementChild as HTMLDivElement)
  }
}

new ProjectList()

export default class ProjectFeature {
  outputEl: HTMLDivElement
  templateEl: HTMLTemplateElement
  formEl: HTMLFormElement

  constructor() {
    this.outputEl = document.getElementById('app')! as HTMLDivElement
    this.templateEl = document.getElementById('content_template')! as HTMLTemplateElement

    const importedNode = document.importNode(this.templateEl.content, true)
    this.formEl = importedNode.firstElementChild as HTMLFormElement

    this.attach()
    this.configure()
  }

  private attach() {
    this.outputEl.insertAdjacentElement('afterbegin', this.formEl)
  }

  private configure() {
    this.formEl.addEventListener('submit', this.save)
  }

  private gratherUserInput(e: Event) {
    const target = e.target as any

    const title = (target.title as HTMLInputElement).value
    const description = (target.description as HTMLTextAreaElement).value
    const people = (target.people as HTMLInputElement).value

    const data = { title, description, people }

    const { isError, errors } = validate(data, {
      title: {
        required: true,
      },
      description: {
        required: true,
        minLength: 2,
        maxLength: 5
      },
      people: {
        min: 1,
        max: 5
      }
    })

    return { data, isError, errors }
  }

  @Autobind
  private save(e: Event) {
    e.preventDefault()

    const { data, isError, errors } = this.gratherUserInput(e)

    if (isError) {
      alert(errors[0].message)
      return
    }

    console.log(data)

    this.formEl.reset()

  }

}