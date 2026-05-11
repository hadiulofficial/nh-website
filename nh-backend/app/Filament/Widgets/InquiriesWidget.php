<?php

namespace App\Filament\Widgets;

use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Inquiries;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\ViewAction;

class InquiriesWidget extends TableWidget
{
    protected static ?string $heading = 'Recent Inquiries';
    protected static ?int $sort = 20;

    protected function getTableQuery(): Builder
    {
        return Inquiries::query()->latest()->limit(5);
    }

    protected function getTableColumns(): array
    {
        return [
            TextColumn::make('first_name')->label('First Name'),
            TextColumn::make('last_name')->label('Last Name'),
            TextColumn::make('email'),
            TextColumn::make('phone'),
            BadgeColumn::make('status')
                ->label('Status')
                ->colors([
                    'success' => 'active',
                    'danger' => 'inactive',
                    'warning' => 'pending',
                    'primary' => 'resolved',
                ])
                ->formatStateUsing(fn ($state) => ucfirst($state)),

            TextColumn::make('created_at')->dateTime('M d, Y'),
        ];
    }


    public function getColumnSpan(): int | string | array
    {
        return 'full';
    }
}
