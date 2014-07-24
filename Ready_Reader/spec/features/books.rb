require 'rails_helper'

  feature 'ability to read a sentence from a book' do
  let!(:book) { Book.create(title: "test", content: "test")}

  scenario 'user sees the title of the book' do
    visit book_path(book.id)
    expect(page).to have_content(book.title)
  end

  scenario 'user sees one sentence from the book' do
    expect(page).to have_content(book.sentences[0])
  end

end
