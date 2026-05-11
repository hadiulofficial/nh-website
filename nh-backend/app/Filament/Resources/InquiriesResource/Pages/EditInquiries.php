<?php

namespace App\Filament\Resources\InquiriesResource\Pages;

use App\Filament\Resources\InquiriesResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditInquiries extends EditRecord
{
    protected static string $resource = InquiriesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            //Actions\DeleteAction::make(),
        ];
    }
}
