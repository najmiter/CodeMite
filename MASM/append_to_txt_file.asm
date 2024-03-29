;; Method 1

include irvine32.inc
include macros.inc

.data
     max_file_size  equ  1000

     filename       byte      "data.txt", 0
     file_handle    dword     0
     new_data       byte      "This is some data that we're going to append.", 10, 0
     bytes_read     dword     0

     one_string     byte      max_file_size dup(0)

.code
main proc
     ; mov edx, offset filename
     lea edx, filename
     call OpenInputFile

     mov file_handle, eax

     mov eax, file_handle
     lea edx, one_string
     mov ecx, max_file_size
     call ReadFromFile
     
     mov bytes_read, eax

     mov eax, file_handle
     call CloseFile

     mov esi, bytes_read
     xor edi, edi
     .while edi < lengthof new_data
          mov al, new_data[edi]
          mov one_string[esi], al

          inc edi
          inc esi
     .endw

     mov bytes_read, esi

     lea edx, filename
     call CreateOutputFile

     mov file_handle, eax

     lea edx, one_string
     mov ecx, bytes_read
     mov eax, file_handle
     call WriteToFile

     mov eax, file_handle
     call CloseFile

     mWriteString one_string

     invoke ExitProcess, 0
main endp
end main

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Method 2
include irvine32.inc
include macros.inc

.data
     filename       byte      "data.txt", 0
     file_handle    dword     0
     new_data       byte      "This is some data that we're going to append.", 10, 0
     bytes_read     dword     0

.code
main proc
     invoke CreateFile, \
               addr filename, \
               generic_write, \
               file_share_read, \
               0, open_always, \
               file_attribute_normal, 0

     mov file_handle, eax

     invoke SetFilePointer, file_handle, 0, 0, file_end
     
     lea edx, new_data
     mov ecx, lengthof new_data
     invoke WriteFile, \
          file_handle, \
          addr new_data, \
          lengthof new_data, \
          addr bytes_read, 0

     invoke CloseHandle, file_handle

     invoke ExitProcess, 0
main endp
end main
