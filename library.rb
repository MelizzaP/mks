
class Book
  attr_reader :author, :title, :id
  attr_accessor :status
  
  def initialize(title, author)
    @title = title
    @author = author
    @id = nil
    @status = 'available'
  end
  
# This function will return false if the book 
#   is already checked out, true if available
  def check_out 
    if status == 'available'
      @status = 'checked_out'
      true
    else 
      false 
    end   
  end
  
end

class Borrower
  def initialize(name)
  end
end

class Library
  def initialize(name)
    @books = []
  end

  def books
  end

  def add_book(title, author)
  end

  def check_out_book(book_id, borrower)
  end

  def check_in_book(book)
  end

  def available_books
  end

  def borrowed_books
  end
end
